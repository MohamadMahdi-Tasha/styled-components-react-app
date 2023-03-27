// Codes By Mahdi Tasha
// Importing Part
import { configureStore, createSlice } from "@reduxjs/toolkit";
import commentImg from '../assets/img/img-comment-author.jpg';
import productImg from '../assets/img/img-product.jpg';
import musicImg from '../assets/img/img-music.jpg';
import music from '../assets/audio/audio-music.mp3';

// Creating Slice
const appSlice = createSlice({
    name: 'app',
    initialState: {
        comment: {
            content: "“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”",
            author: "Sarah Dayan",
            job: "Staff Engineer",
            company: "Algolia",
            img: commentImg
        },
        product: {
            name: "Classic Utility Jacket",
            price: 110,
            sizes: ["XS","S","M", "L", "XL"],
            selectedSize: "XS",
            isLiked: false,
            isInBag: false,
            img: productImg
        },
        music: {
            cover: musicImg,
            musicAudio: music,
            trackName: 'Illegal',
            singerName: 'Chvrsi',
            timePassed: 0,
            time: 193200,
            isPlaying: false,
        }
    },
    reducers: {
        setProductSizes(state, action) {},
        setProductLiked(state, action) {},
        setProductWithBag(state, action) {},
        setMusicPlayingState(state, action) {},
        setMusicPassedTime(state, action) {},
    }
})

// Exporting Actions To Use
export const actionsOfAppSlice = appSlice.actions;

// Configuring Store And Exporting It As Default
const appState = configureStore({reducer: appSlice.reducer})
export default appState;