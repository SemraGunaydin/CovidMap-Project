
import { render,screen } from "@testing-library/react";
import Item from "../pages/home/item";



test("Gönderilen proplar doğru şekilde kullanılır", () => {
// test edilecek bileseni renderla
	render(<Item color="text-blue-500" text=" Total Test" value="654M"/>);

// icon elementini al
	const icon = screen.getByTestId("icon");
	// color prop'u ile gelen deger icon'un classinnda varmi?
	expect(icon).toHaveClass("text-blue-500");

	//1) önce elementi çağır ardından textine bak
  // const h2 = screen.getByRole("heading");
  // expect(h2).toHaveTextContent("256M");

  //2) elementi textine göre çağır
  screen.getByText("Total Test");

});