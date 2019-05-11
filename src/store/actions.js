export default {
  pushNewEquipment(context, newEquipment){
      // some time taking computation...
      context.commit('addNewEquipment', newEquipment)
  },
  pushEquipmentUpdate(context, updatedEquipment){
      // find position of update in state.equipments
      const idx = context.state.equipments.findIndex(eqm => {
          return eqm.id == updatedEquipment.id
      })
      const update = {
          index: idx,
          equipment: updatedEquipment
      }
      context.commit('updateEquipment', update)
  }
}
