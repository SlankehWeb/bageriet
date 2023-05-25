import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const NewsfeedContext = createContext()

const NewsfeedProvider = ({children}) => {

	const [ newsfeed, setNewsfeed ] = useState([])

	useEffect(() => {
		if(sessionStorage.getItem('newsfeed')) {
			setNewsfeed(JSON.parse(sessionStorage.getItem('newsfeed')))
		} else {
			const getData = async () => {
                const endpoint = "https://api.mediehuset.net/bakeonline/news"
				const result = await axios.get(endpoint)
                setNewsfeed(result.data)
				sessionStorage.setItem('newsfeed', JSON.stringify(result.data));
			}
			getData()
		}
	}, [children]);
	
	return (
		<NewsfeedContext.Provider value={{newsfeed, setNewsfeed}}>
			{children}
		</NewsfeedContext.Provider>
	);
}

const useNewsfeedData = () => useContext(NewsfeedContext)

export { NewsfeedProvider, useNewsfeedData };