import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import GalleryPage from "../GalleryPage/GalleryPage.jsx";
import store from "../../../redux/store";

describe("the Gallery component", () => {
  beforeAll(() => {
    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet("/api/gallery").reply(200, [
      {
        id: 1,
        images: [{ url: "https://google.com" }],
        title: "Test",
        description: "asfgasdf",
        latitude: 1.0,
        longitude: 2.0,
        user_name: "Bob",
        date: "2021-10-11",
      },
    ]);
  });

  it('should render the "Gallery" text', () => {
    render(
      <Provider store={store}>
        <GalleryPage />
      </Provider>
    );
    expect(screen.getByText(/Gallery/)).toBeInTheDocument();
  });

  it('should render the "Gallery item" text', () => {
    render(
      <Provider store={store}>
        <GalleryPage />
      </Provider>
    );
    const galleryItem = screen.getByText(/asfgasdf/);
    expect(galleryItem).toBeInTheDocument();
  });

  it("should handle clicking on the image and taking us to the map", () => {
    window.open = jest.fn();

    render(
      <Provider store={store}>
        <GalleryPage />
      </Provider>
    );
    const image = screen.getByAltText("Test");
    expect(image).toBeInTheDocument();

    userEvent.click(image);
    expect(window.open.mock.calls.length).toEqual(1);
  });
});
