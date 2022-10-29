function validation() {
    let name = $('#name').val()
    let nim = $('#nim').val()
    let email = $('#email').val()
    let jurusan = $('#jurusan').val()
    let regional = $('#regional').val()
    let subdivisi = $('#pilihsubdivisi').val()
    let alasan = $('#reason').val()

    if(name == 0){
        alert('Pendaftaran gagal, mohon mengisi semua informasi!')
        return;
    } else if(nim == 0){
        alert('Pendaftaran gagal, mohon mengisi semua informasi!')
        return;
    } else if(email == 0){
        alert('Pendaftaran gagal, mohon mengisi semua informasi!')
        return;
    } else if(jurusan == 0){
        alert('Pendaftaran gagal, mohon mengisi semua informasi!')
        return;
    } else if(alasan == 0){
        alert('Pendaftaran gagal, mohon mengisi semua informasi!')
        return;
    }

    if(email.endsWith('@binus.ac.id')){
        if(alasan.length <= 512){
            alert('Halo! '+name+', terima kasih telah mendaftar menjadi Nindya sebagai '+subdivisi+' di '+regional+'. Pendaftaran anda telah tersimpan. Mohon tunggu email kami di '+email+' dalam 10 hari kedepan.')
        } else{
            alert('Alasan menjadi Nindya maksimal memiliki input sebesar 512 kata!')
        }
    } else{
        alert('Email harus diakhiri dengan @binus.ac.id')
    }
}