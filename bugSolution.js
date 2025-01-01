The solution is to use conditional rendering to check if the data is available before attempting to render it.  You can also use optional chaining (?.) to safely access properties of potentially nullish objects.

Here's the corrected code:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <View>
        {data ? <Text>{data.name}</Text> : <Text>Loading...</Text>}
      </View>
    );
  }
}
```
This revised code ensures that the `Text` component only renders if `data` is not null.  Alternatively, you could use optional chaining:  `<Text>{data?.name || 'Loading...'}</Text>`