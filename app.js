const api = "https://catfact.ninja/fact";

async function getData() {
  try {
    let response = await fetch(api);
    let data = await response.json();

    console.log(data.fact);
  } catch (error) {
    console.log(error);
  }
}
getData();
