import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const [songsData, setsongsData] = useState([]);
    const [isPlaying, setisPlaying] = useState(false);
    const [track, setTrack] = useState();
    const [albumsData, setalbumsData] = useState(null);
    const [isLoading, setisLoading] = useState(false);


    const getAlbums = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/albums/listAlbums');
            const albumList = response.data.albums; // No need to await here
            setalbumsData(albumList);
        } catch (error) {
            console.log('Error fetching albums:', error);
        }
    };
    const getSongs = async () => {
        try {

            const response = await axios.get('http://localhost:4000/api/songs/listSongs');
            const songList = response.data.songs;
            setsongsData(songList);
            if (songList.length > 0) {
                setTrack(songList[0]); // Only set track if songList has songs
            }
        } catch (error) {

            console.log('error fetching the songs', error);
        }
    }
    useEffect(() => {
        getAlbums();
        getSongs();
    }, [])



    const playWithId = async (id) => {
       
            setisLoading(true)
            const selectedTrack = songsData.find(song => song._id === id); // Find the song by its id
            if (selectedTrack) {
                setTrack(selectedTrack);  // Set track as a single song object
                audioRef.current.src = selectedTrack.file; // Set audio source to the song file
                await audioRef.current.play();  // Play the selected song
                setisPlaying(!isPlaying);
            }
            setisLoading(false)
       
    };

    const play = async () => {
        if (track && audioRef) {
            audioRef.current.play();
            setisPlaying(!isPlaying)
        }

    }
    const pause = async () => {
        if (track && audioRef) {
            audioRef.current.pause();
            setisPlaying(!isPlaying)
        }
    }
    const contextValue = {
        audioRef, albumsData, setalbumsData,
        isPlaying, setisPlaying, songsData, setsongsData,
        track, setTrack, play, pause,
        playWithId, isLoading, setisLoading,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}

        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider