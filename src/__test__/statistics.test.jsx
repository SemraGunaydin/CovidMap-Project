/*
 * Yazıcağımız testler kesinlikle api isteklerine bağımlı olmamamlı, yani api'dan gelicek cevap testin geçip geçmeme durumunu etkilememeli

 * api isteği atan fonksiyonu "mock'layıp" api'dan gelicek cevapları kendimiz belirleyeceğiz. Bu sayede component api isteklerinden gelen cevabı düzgün bir şekilde ele alıyo mu test etmiş olucaz hemde gerçek api'la olan bağı tamamen koparıcaz
 */
import {render,screen, waitFor} from "@testing-library/react";
import Statistics from "../pages/home/statistics";
import { totalApi }  from "../utils/api";
import { totalData } from "../utils/constants";
import millify from "millify";



// api isteğini atan fonksiyonu mock'la
// bu ifade syaesinde test ortamında her totalApi.get() fonksiyonu çağrıldığı zaman api isteği atılması yerine aşağıda oluşturuğumuz sahte fonksiyon çalışıcak
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

test("bilesenleri renderladisinda ekrana loader gelir", ()=> {
	// mock get fonksiyonu promise dondursun
	totalApi.get.mockReturnValue(new Promise(() => {}));

	//componenti renderle
	render(<Statistics/>);


	// ekranda loader componenti vardir
	screen.getByTestId("loader");
});

test("api'den hata gelirse ekranda hata mesaji yazar",async() => {
	//mock get fonksiyonu hata dondursun
	totalApi.get.mockRejectedValue(new Error("API Error"));

	//componenti renderle
	render(<Statistics/>);

	//belirli bir sureden sonra hata mesaji verir once loader sonra hata gelir
	await waitFor(() => screen.getByText("Something occured wrong"));
});

test("api'den veri gelirse ekrana veriler basilir", async () => {
	//mock get fonksiyonu basarili cevap dondursun
	totalApi.get.mockResolvedValue({data: {data:totalData}});

	//componenti renderle
	render(<Statistics/>);

	//ekrana verileri getiren item componentleri gelir
	await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

	 // topla vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.confirmed));

    // topla vefat sayısı ekrana basılır
    screen.getByText(millify(totalData.deaths));

    // aktif vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.active));

});