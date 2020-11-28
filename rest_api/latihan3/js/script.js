function tampilkanSemuaMenu() {
    $.getJSON("pizza.json", function(data) {
        let menu = data.menu;
        $.each(menu, function(i,data) {
            let isiMenu = '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+data.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">Rp.'+ data.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            $('#daftar-menu').append(isiMenu);
        });
    });
}
//Menampilkan data awal
tampilkanSemuaMenu();
//Menampilkan daftar menu seusai dipilih
$('.nav-link').on('click',function () {
    //Merubah activ navbar
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    //mengambil teks yang dipilih
    let category = $(this).html();
    $('h1').html(category);

    if (category == "All Menu") {
        $('#daftar-menu').html('');
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON("pizza.json", function(data){
        let menu = data.menu;
        let content = '';
        
        $.each(menu, function(i,data){
            if (data.category == category.toLowerCase()) {
                let isiMenu = '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+data.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">Rp.'+ data.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';

                content += isiMenu;
            }
        });
        $('#daftar-menu').html(content);
    })
})
