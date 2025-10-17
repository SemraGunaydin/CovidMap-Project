import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"
import {mockData} from "../utils/constants";
import { Provider } from "react-redux";
import Content from "../pages/detail/content";
import { render, screen } from "@testing-library/react";



const mockStore = configureStore([thunk]);
it("store yuklenme durumundayken ekrana loader gelir", () => {
	const store = mockStore({isLoading:true, error:null, data:null});

	// bilesenleri renderla
	render (
		<Provider store={store}>
			<Content/>
		</Provider>
	);

	screen.getAllByTestId("content-loader");
});

it("store hata durumundayken ekrana error gelir", () => {
	const store = mockStore({isLoading:false, error:"no any item", data:null});

	// bilesenleri renderla
	render (
		<Provider store={store}>
			<Content/>
		</Provider>
	);

	screen.getByTestId("error");
});

it("store veri geldiginde nesnedeki her bir deger icin  ekrana kart basilir", () => {
	const store = mockStore({isLoading:false, error:null, data:mockData});

	// bilesenleri renderla
	render (
		<Provider store={store}>
			<Content/>
		</Provider>
	);

	// data nesnesini diziye cevir object to array yap yani
	const arr = Object.entries(mockData).filter(([key]) => key !== "flag");

	// dizideki her deger icin kart icerisinde bilgiler bsilir
	arr.forEach((item) => {
		//ekrana item 'in  key degeri basiliyor mu?
		screen.getByText(item[0]);

		//ekrana item'in value degeri basiliyor mu?
		screen.getByText(item[1]);
	})
});

