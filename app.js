const banderas = document.getElementById('banderas');

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
});

const fetchData = async() => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderilla (data)

    } catch (error) {
        console.log (error)
    }
}


  const banderillas = data =>  {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
        <img src="https://flagcdn.com/gt.svg" alt="" class="img-fluid">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>
            <b>${item.capital}</b>
            
          </p>
          <p>
            <b>${item.languages}</b>
            
          </p>
          <p>
            <b>${item.currencies}</b>
            
          </p>

        </div>

    </article>
    `
    });
    banderas.innerHTML = elementos;
    
}

