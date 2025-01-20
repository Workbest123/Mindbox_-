import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp", () => {
  test("добавление новой задачи", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.submit(input);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("переключение статуса задачи", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Task to Complete" } });
    fireEvent.submit(input);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("фильтрация списка задач", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.submit(input);
    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.submit(input);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]); 

    fireEvent.click(screen.getByText("Active"));
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Completed"));
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
  });

  test("очистка завершенных задач", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Task to Complete" } });
    fireEvent.submit(input);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByText("Clear completed"));
    expect(screen.queryByText("Task to Complete")).not.toBeInTheDocument();
  });
});
