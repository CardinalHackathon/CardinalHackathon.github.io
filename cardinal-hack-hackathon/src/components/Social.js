import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'


function Social() {
    return (
        <HStack spacing="24">
           {/* <IconButton as={FaFacebookF} boxSize="50" isRound='true'/>
            <IconButton as={FaGoogle} boxSize="50" isRound='true'/> */}
            <IconButton as={FaGithub} boxSize="35" isRound='true' onClick={() => window.open("https://github.com/AJChippi")}/>
            <IconButton as={FaDiscord} boxSize="35" isRound='true' onClick={() => window.open("https://discord.gg/CD3m9Xr5QB")}/>
            <IconButton as={SiDevpost} boxSize="35" isRound='true' marginRight={10} onClick={() => window.open("")}/>
        </HStack>
    )
}

export default Social