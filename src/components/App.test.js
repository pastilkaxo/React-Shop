import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header/Header";

test('renders without errors' , () => {
    render(<Header/>);
    screen.debug();
    expect(screen.getByText(/BMSHOP/i)).toBeInTheDocument();
})