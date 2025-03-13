import { Engine, Mesh, AbstractMesh } from '@babylonjs/core'
import { isNumber } from 'lodash'

export default class BlendModes {
  static init() {
    const alphaTags: (keyof typeof Engine)[] = [
      'ALPHA_DISABLE',
      'ALPHA_ADD',
      'ALPHA_COMBINE',
      'ALPHA_SUBTRACT',
      'ALPHA_MULTIPLY',
      'ALPHA_MAXIMIZED',
      'ALPHA_ONEONE',
      'ALPHA_PREMULTIPLIED',
      'ALPHA_PREMULTIPLIED_PORTERDUFF',
      'ALPHA_INTERPOLATE',
      'ALPHA_SCREENMODE'
    ]

    alphaTags.forEach(tag => {
      const allMeshes = globalThis.scene.getMeshesByTags(tag.toLowerCase())
      const meshes = allMeshes.filter((mesh): mesh is Mesh => mesh instanceof Mesh)

      meshes.forEach(mesh => {
        if (mesh.material) {
          const type = Engine[tag]

          if (isNumber(type)) {
            mesh.material.alphaMode = type
            mesh.material.transparencyMode = 2
          }
        }
      })
    })
  }
}