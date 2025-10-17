import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"
import Head from "../pages/detail/head";
import { render,screen} from "@testing-library/react";
import {mockData} from "../utils/constants";



// redux kullanan bilesenler icin sahte store'lar olusturmamizi saglayacak fonksiyon
const mockStore = configureStore([thunk]);

test("store yukleme durumundayken ekrana loader basilir", () => {
	// yuklem durumunda sahte store olustur
	const store = mockStore({isLoading:true, error:null, data:null});


	// bilesemni renderla
	render(
		<Provider store={store}>
			<BrowserRouter>
			<Head/>
			</BrowserRouter>
		</Provider>
	);

	// ekranda loader varmi control et
	screen.getByTestId("head-loader");
});

it("store'a veri bittiginde ekrana loader basilir", () => {
	// yuklem durumunda sahte store olustur
	const store = mockStore({isLoading:false, error:null, data:null});


	// bilesemni renderla
	render(
		<Provider store={store}>
			<BrowserRouter>
			<Head/>
			</BrowserRouter>
		</Provider>
	);
	// ekranda loader yok mu?
	const element = screen.queryByTestId("head-loader");
	expect(element).toBeNull();
});

it("store'a veri geldiginde ekrana ulke ve bayrak verisi basilir", () => {
	// sahte store olustur
	const store = mockStore({isLoading:false, error:null, data:mockData});


	// bilesemni renderla
	render(
		<Provider store={store}>
			<BrowserRouter>
			<Head/>
			</BrowserRouter>
		</Provider>
	);

	// ulke ismi ekrana geliyormu
	screen.getByRole("heading", {name:mockData.country});
	// bayrak ekrana geliyormu
	const img = screen.getByAltText(mockData.flag.alt);
	expect(img).toHaveAttribute("src", mockData.flag.png);
});