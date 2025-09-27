document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.getElementById('sideMenu');
  document.getElementById('menuToggle')?.addEventListener('click',()=>menu.style.display='block');
  document.getElementById('closeMenu')?.addEventListener('click',()=>menu.style.display='none');
  const searchBtn=document.getElementById('searchToggle');
  const searchBar=document.getElementById('searchBar');
  searchBtn?.addEventListener('click',()=>{searchBar.style.display=searchBar.style.display==='block'?'none':'block'});
  document.getElementById('loadMore')?.addEventListener('click',()=>alert('Load more clicked'));
  document.getElementById('updateSEO')?.addEventListener('click',()=>alert('SEO Updated'));
});