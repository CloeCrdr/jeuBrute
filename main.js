// imports
import path from 'path'
import { User } from './dist/classe/user.js'
import { Objet } from './dist/classe/objet.js'

import { addUser } from "./dist/model/register.js"

import {
    selectUser,
    displayConnect,
    displayProfile,
    getAll,
    addAvatar,
    updateUser,
    updateStatsUserEquip,
    updateStatsUserDesequip
} from "./dist/model/login.js"

import {
    selectUserObjects,
    getBoutique,
    insertBoutique,
    updateBoutique,
    updateUserBoutique,
    selectObjById,
    getObjByIdInBag,
    getEquipedItemByType,
    equipItem,
    getItemById,
    getEquipedItems,
    checkItemInBag,
    desequipItem
} from "./dist/model/objets.js"

import cookieSession from 'cookie-session'
import express from "express"

const app = express()

// config
app.set('views', path.join(process.cwd(), 'vues'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(process.cwd(), 'assets')))
app.use(express.urlencoded({ extended: false }))

app.use(cookieSession({
    name: 'session',
    keys: ['123987456'],
    maxAge: 24 * 60 * 60 * 1000
}))

// routes
app.get("/", (req, res) => {
    res.render('register', { title: "register page" })
})

// ... toutes tes autres routes ici ...

// serveur
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`⚡ Server listening on ${PORT}`)
})
