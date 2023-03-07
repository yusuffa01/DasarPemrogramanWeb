function toggleDropdown() { /* kode tersebut berfungsi untuk menampilkan dan menyembunyikan dropdown */
    var dropdownContent = document.getElementById("myDropdown"); /* akan mendapatkan element dengan id dari dokumen html dan menyimpan kode yg dibaris 3 */
    dropdownContent.classList.toggle("show"); /* berguna untuk menambah dan menghapis css show */
  }
  
  window.onclick = function(event) { /* menambahkan event listener ke seluruh elemen pada halaman web dan ketika kita klik maka akan menunjukan tombol drop down */
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");/* menyimpan variabel dropdown*/
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  