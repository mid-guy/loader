/**
 * Loads a module dynamically and returns it.
 *
 * @param alias - The alias or path of the module to load.
 * @returns A promise that resolves to the loaded module.
 * @throws If there is an error while loading the module.
 * @template T - The type of the module being loaded.
 */
/**
 * Asynchronously loads a module specified by the given alias.
 *
 * @param {string} alias - The alias of the module to be loaded.
 * @returns {Promise<T>} - A promise that resolves to the loaded module.
 * @throws {any} - Throws an error if the module fails to load.
 *
 * @example
 * // Load a module with the alias "@helper/some-module".
 * const myModule = await load<MyModule>("@helper/some-module");
 */
async function load<T>(alias: string): Promise<T> {
  try {
    const module = await import(`${alias}`);
    // Use the imported module
    return module.default as T;
  } catch (error) {
    throw error;
  }
}

export { load };