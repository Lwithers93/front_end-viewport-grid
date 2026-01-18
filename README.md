# Dynamic Viewport Grid

## Summary

This project is a single-page React web application that allows the user to dynamically update grid rows and columns on the page, via inputs in a collapsible sidebar.

## Build

Created using a provided template, based off create-react-app, this project is built to fulfill the below specified requirements:

- A fixed Sidebar with numeric inputs for `Rows` and `Columns`, each constrained to the range 1-10.
- Sidebar collapse/expand is controlled by onClick attribute on Burger component, and is held in state variable.
- Row/Column inputs are held in state variables. Updating these will cause the main grid to re-render, reflecting the configured row and column counts, displaying a uniform viewport at every grid position.
- Grid is designed to occupy the screen, regardless of device size. Each Viewport has equal sizing with a small gutter/margin, and responds smoothly to browser resizes and Sidebar collapsing/expanding.
- Viewports are styled with a thin border and contain a unique identifier in the top-left, and current dimensions centered within it

### Published via Github pages

[front_end-viewport-grid](https://lwithers93.github.io/front_end-viewport-grid/)

### Testing

A small number of unit tests have been created and passed using npm run tests - See /src/_tests_/ for list of unit tests.
Tests relate to HTML input element accessibility and state variable updates for Grid cells.
