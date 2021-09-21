import '../components/pro-file.js';

const main = () => {    
    /* profile ================================ */
    const profileElement = document.querySelector("pro-file");
    const sticky = profileElement.offsetTop;

    const sticKy = () => {
        if(window.pageYOffset > sticky) {
            profileElement.classList.add("sticky")
        } else {
            profileElement.classList.remove("sticky")
        }
    }

    window.onscroll = () => sticKy();

    /* element varian ================================ */
    let dtlpsnElmt = document.querySelector("#detailPesanan");
    dtlpsnElmt.innerHTML += "";

    const varianElmt = document.createElement("div");

    varianElmt.setAttribute("class", "varian")
    varianElmt.innerHTML = `
        <div class="vrasa">
            <label>Varian Rasa</label>
            <select id="rasa" class="form-control">
                <option value="Kacang Hijau">Kacang Hijau</option>
                <option value="Coklat">Coklat</option>
                <option value="Keju">Keju</option>
            </select>
        </div>
        <div class="vharga">
            <label>Varian Harga</label>
            <select id="harga" class="form-control" onchange="totalHarga();">
                <option value="10000">Rp10.000 (8pcs)</option>
                <option value="15000">Rp15.000 (12pcs)</option>
                <option value="25000">Rp25.000 (20pcs)</option>
            </select>
        </div>
        <div class="vqty">
            <label>Jumlah</label>
            <input id="qty" type="number" value="" onkeyup="totalHarga();" class="form-control">
        </div>
    `;
    
    const btnaddVarian = document.querySelector("#addVarian");
    dtlpsnElmt.insertBefore(varianElmt, btnaddVarian)

    /* btn addVarian ================================ */
    function btnAddVarian() {
        const varianDivCln = varianElmt.cloneNode(true);
        dtlpsnElmt.insertBefore(varianDivCln, btnaddVarian);
    }

    btnaddVarian.addEventListener("click", btnAddVarian)

    /* total harga ================================ */
    const totalHarga = () => {
        let harga = document.querySelector("#harga");
        let selectHarga = parseInt(harga.options[harga.selectedIndex].value);

        let qty = parseInt(document.querySelector("#qty").value);
        let tHarga = document.querySelector(".Tharga");
        tHarga.innerHTML = `<p>Total Harga : Rp ${selectHarga*qty} </p> `;
    }

    document.totalHarga = totalHarga;

    /* btnSave + history ================================ */
    document.querySelector("#btnSave").addEventListener("click", function() {
        let customer = document.querySelector("#customer").value;

        let rasa = document.querySelector("#rasa");
        let selectRasa = rasa.options[rasa.selectedIndex].value;
        
        let tglPesan = document.querySelector("#tglPesan").value;
    
        let harga = document.querySelector("#harga");
        let selectHarga = parseInt(harga.options[harga.selectedIndex].value);

        let qty = parseInt(document.querySelector("#qty").value);
        let tHarga = selectHarga*qty;

        // let tharga = document.querySelector("#tharga");
        // if(tharga = null) {
        //     tharga = 0
        // } else {
        //     tharga = tHarga;
        // }

        // let pdptnHarian = parseInt(document.querySelector("#pdptnHarian").innerText);
        // if(pdptnHarian === null) {
        //     pdptnHarian === 0
        // } 

        const history = {
            // no: no,
            customer: customer,
            rasa: selectRasa,
            qty: qty,
            tHarga: tHarga,
            hariTgl: tglPesan,
            // pdptn: `${tharga} + ${pdptnHarian}` 
        }
        
        putHistory(history);
        renderHistory();
    })
}

export default main;

