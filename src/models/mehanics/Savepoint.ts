import {Mesh, AbstractMesh} from "@babylonjs/core"
import store from "@/store/store"
import storeVuex from '@/store/vuex'
import RayCastFootFour from "@/models/сommon/rayCast/RayCastFootFour"
import {Helpers} from "@/models/Helpers"

export default class Savepoint {
    static init() {
        const player = store.getSelfPlayer()
        const meshFoot = globalThis.scene.getMeshById('playerFoot_' + player.id) as Mesh
        let lastId = 'none'

        const allPoints = scene.getMeshesByTags('savepoint')
        const points = allPoints.filter((mesh): mesh is Mesh => mesh instanceof Mesh)

        setInterval(() => {
            const rayCast = new RayCastFootFour(meshFoot)
            const pickInfo = rayCast.cast((mesh: any) => {
                return Helpers.hasTag(mesh, 'savepoint')
            })

            if (pickInfo) {
                const mesh = pickInfo.pickedMesh

                if (mesh) {
                    if (lastId !== mesh.id) {
                        lastId = mesh.id
                        storeVuex.commit('SET_SAVEPOINT', mesh.id)
                    }
                }
            }

        }, 100)

        storeVuex.subscribe(mutation => {
            if (mutation.type == 'SET_BACK_TO_SAVEPOINT') {
                const point = points.find(point => point.id === lastId)

                if (point) {
                    meshFoot.position.x = point.position.x
                    meshFoot.position.y = point.position.y + 2
                    meshFoot.position.z = point.position.z
                }
            }
        })
    }
}