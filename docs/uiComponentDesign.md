# UI Component Design

Component design based on simple UI with the following concept
![design concept](/docs/design_framework.png)

## Atoms

### IconButton `<button>`

Button with icon.

**props**

```bash
    icon: typeof keyof ICONLIST
    variant: 'interactive' | 'display'
    ariaLabel: string;
    clickFunction: MouseEventHandler;
    type?: HTMLButtonElement["type"] = 'button';
```

### TextButton `<button>`

Button with text.

**props**

```bash
    ariaLabel: string;
    clickFunction: MouseEventHandler;
    children: ReactNode
    type?: HTMLButtonElement["type"] = 'button';
```

### TextLink `<a>`

Interactive link user can click. Opens in new tab by default
**props**

```bash
    children: ReactNode
    href: string
    ariaLabel: string
    target: HTMLINput['target'] = '_blank'
```

### TheInput `<input>`

Input field
**props**

```bash
    children: ReactNode
    value: string;
    min: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
    ariaLabel: string;
```

## Molecules

### SortButton `<button>`

Component with sortable element. Used as button the user can click on to change sort order.

**props**

```bash
    key: string
    sortOrder: 'asc' | 'desc' | 'unsorted'
    onClick: (key: string) => void
    icon: typeof keyof ICONLIST
    children: ReactNode
```

### FlightCard `<li>`

Single result with details of single flight

**props**

```bash
    flightIdentifier: string
    flightNumber: string
    airport: string
    date: string
    expectedTime: string
    originalTime: string
    url: string
    score: string
```

### SearchBar `<div>`

Component to search with input.

- user can input with `TheInput`.
- will automatically execute `onChange` when the input changes.
- minimum input is 3 characters. Error message will show when there is not enough characters

**props**

```bash
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
    ariaLabel: string;
```

### SearchResults `<ul>`

Component that lists search results. If there are no search results, shows a default message saying there is no results.

- uses `TextButton` as child

**props**

```bash
    results: string[]
    onSelectResult: (target: string) => void
```

### FlightCardList `<ul>`

Component that lists flight results

- uses `FlightCard` as child

**props**

```bash
    fligths: Flight[]
```

## Organisms

### AirportFinderSection `<section>`

Component that handles all logic and UI regarding looking up an airport

- uses `SearchBar` as child. Always visible
- uses `SearchResults` as child. Visible only when the input is focused on SearchBar and input > 3.

**state intercation**

- executes `setSearchInput` func of `FlightsContext` on change of search input
- executes `setChosenAirport` func of `FlightsContext` when user selects an airport from the SearchBar.
- display `searchResults` of `FlightsContext` if available

### AirportResultSection `<section>`

Component that handles all logic and UI regarding the flight results.

**state intercation**

- executes `sortFlightResults` func of `FlightsContext` when user changes sort.
- display `chosenAirport` of `FlightsContext` as title.
- display `flightResults` of `FlightsContext` if available.
