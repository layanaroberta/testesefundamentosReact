import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong>Gold Life (Florianópolis)</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Residence Mall (Belo Horizonte)</Filho>
        <Filho sobrenome="Salvador"> Life Roman </Filho>
    </div>