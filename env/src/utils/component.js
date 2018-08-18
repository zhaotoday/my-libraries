export default {
  getModifiersClass ({ block, defaultModifier = '', modifiers } = {}) {
    return modifiers
      ? modifiers.split(',').map(item => `${block}--${item}`).join(' ')
      : `${block}${defaultModifier ? `--${defaultModifier}` : ''}`
  }
}
