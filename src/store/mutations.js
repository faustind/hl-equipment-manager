export default {
 addNewEquipment(state, newEquipment){
     state.equipments.push(newEquipment)
 },
 updateEquipment(state, update){
    state.equipments[update.index] = update.equipment
 }
}
