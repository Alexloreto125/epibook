import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import fantasy from "../data/fantasy.json";
import CommentArea from "../components/CommentArea";
// import Welcome from "../components/Welcome";
/// ES: 1
describe("Welcome", () => {
  it("will be mount correctly?", () => {
    render(<App />);
    const welcome = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(welcome).toBeInTheDocument();
  });
});
/// ES: 2
describe("Bootstrap-Cards", () => {
  it("how many cards?", async () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-wait-for-empty-callback
    await waitFor(() => {}, { timeout: 3000 });
    const cards = screen.getAllByTestId("bootstrap-card");
    expect(cards).toHaveLength(fantasy.length);
  });
});
/// ES: 3
describe("CommentArea", () => {
  it("CommentArea viene visualizzata?", async () => {
    render(<App />);
    await waitFor(() => {}, { timeout: 3000 });
    const CommentArea = screen.getByTestId("CommentArea");
    expect(CommentArea).toBeInTheDocument();
  });
});

describe("Bootstrap-Cards selected", () => {
  /// ES: 5
  it("selects a card when clicked", async () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-wait-for-empty-callback
    await waitFor(() => {}, { timeout: 3000 });
    const cards = screen.getAllByTestId("bootstrap-card");

    fireEvent.click(cards[0]);

    expect(cards[0]).toHaveStyle({ border: "3px solid red" });
  });
  /// ES: 6
  it("selects a card when clicked double", async () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-wait-for-empty-callback
    await waitFor(() => {}, { timeout: 3000 });
    const cards = screen.getAllByTestId("bootstrap-card");

    fireEvent.click(cards[0]);

    expect(cards[0]).toHaveStyle({ border: "3px solid red" });
    fireEvent.click(cards[1]);
    expect(cards[0]).toHaveStyle({ border: "none" });
    expect(cards[1]).toHaveStyle({ border: "3px solid red" });
  });
});
// /// ES:7
// describe("Niente Istanze nel Dom al caricamento pagina", () => {
//   it("renderizzazione istanze?", () => {
//     render(<App />);

//     const singleComment = screen.queryAllByTestId("single-comment");
//     expect(singleComment).toHaveLength(0);
//   });
// });
describe("Niente Istanze nel Dom al caricamento pagina", () => {
  it("renderizzazione istanze?", async () => {
    render(<App />);
    await waitFor(() => {}, { timeout: 3000 });
    const singleComment = screen.queryAllByTestId("single-comment");
    expect(singleComment).toHaveLength(0);
  });
});
///ES:8
describe("CommentList", () => {
  it("CommentList Loaded?", async () => {
    render(<App />);
    await waitFor(() => {}, { timeout: 3000 });
    const cards = screen.getAllByTestId("bootstrap-card");

    fireEvent.click(cards[0]);
    expect(cards[0]).toHaveStyle({ border: "3px solid red" });
    const commentList = screen.getByTestId("CommentList");
    expect(commentList).toBeInTheDocument();
  });
});
