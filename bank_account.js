let saldo = 0;

function updateSaldo() {
  document.getElementById("saldo").innerText = `Saldo saat ini: Rp.${saldo}`;
}

function tambahSaldo() {
  let jumlah = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah;
    updateSaldo();
    transaksi(
      `Menambahkan <b>Rp.${jumlah}</b> <br> Jumlah saldo <b>Rp.${saldo}</b>`
    );
    alert(`Saldo berhasil ditambahkan! Saldo saat ini: Rp.${saldo}`);
  } else {
    alert("Jumlah saldo tidak valid.");
  }
}

function kurangiSaldo() {
  let jumlah = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );
  if (!isNaN(jumlah) && jumlah > 0) {
    if (jumlah <= saldo) {
      saldo -= jumlah;
      updateSaldo();
      transaksi(
        `Mengurangi <b>Rp.${jumlah}</b> <br> Jumlah saldo <b>Rp.${saldo}</b>`
      );
      alert(`Saldo berhasil dikurangi! Saldo saat ini: Rp.${saldo}`);
    } else {
      alert("Saldo tidak mencukupi.");
    }
  } else {
    alert("Jumlah saldo tidak valid.");
  }
}

function hapusSaldo() {
  saldo = 0;
  updateSaldo();
  transaksi(`Saldo dihapus.<br> Jumlah saldo <b>Rp.${saldo}</b>`);
}

function transaksi(deskripsi) {
  const ul = document.getElementById("riwayat-transaksi");
  const li = document.createElement("li");
  const empty = document.getElementById("empty");

  li.innerHTML = deskripsi;
  ul.appendChild(li);

  if (ul.children.length >= 1) {
    empty.style.display = "none";
  }
}
