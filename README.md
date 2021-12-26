# useEffect

```
const [data, setData] = useState([]);
```
- Will trigger this effect just after 1st render complete, equivalent to componentDidMount

```
useEffect( () => console.log("1 mount"), [] );
```
- Will trigger this effect once data is being updated

```
useEffect( () => console.log("2- data update"), [ data ] );
```

- Will trigger this effect for any state update

```
useEffect( () => console.log("3- any update"));
```
- Will trigger this effect on data update or unmount component
```
useEffect( () => () => console.log("4- data update or unmount"), [ data ] );
```
- Will trigger this effect on unmount component

```
useEffect( () => () => console.log("5 - unmount"), [] );
```
