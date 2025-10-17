import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error"


it("error component'i hata mesajini gosterir", () => {
	//test edilebilir sahte fonksiyon olustur
	const mockFn = jest.fn();

// bileseni renderla
	render(<Error info="internetiz cok yavas" refetch={mockFn}/>);

	//hata mesaji ekranda mi?
	screen.getByText("internetiz cok yavas");

	//tekrar dene butonunu al
	const button = screen.getByRole("button", {name:"Try again"});

	// buttona tikla
	fireEvent.click(button);

	//fonksiyon cagrildimi
	expect(mockFn).toHaveBeenCalled();
})