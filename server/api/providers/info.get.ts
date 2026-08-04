import { providerRegistry } from '../../utils/providers/registry'

/**
 * GET /api/providers/info
 * Returns metadata for the default provider, including the default model
 * resolved from settings.json on the server side.
 */
export default defineEventHandler(() => {
  const provider = providerRegistry.getDefault()
  if (!provider) {
    return {
      name: null,
      defaultModel: null,
    }
  }

  const info = providerRegistry.getInfo(provider.name)
  return {
    name: info?.name,
    displayName: info?.displayName,
    description: info?.description,
    models: info?.models ?? [],
    supportsPermissions: info?.supportsPermissions ?? false,
    supportsImages: info?.supportsImages ?? false,
    supportsInterrupt: info?.supportsInterrupt ?? false,
    defaultModel: info?.defaultModel ?? null,
  }
})
