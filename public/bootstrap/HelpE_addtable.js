/**
 * Created by Administrator on 2017/4/8.
 */


function happyaddt(tempstr)
{
    var happytab = document.getElementById('happytab');
    var happytr=document.createElement('tr');
    var happytd = document.createElement('td');
    var tbody = document.getElementById('tbody');
    happytd.setAttribute('style','text-align:center');
    happytr.appendChild(happytd);
    tbody.appendChild(happytr);
    happytab.appendChild(tbody);
    happytd.innerHTML=tempstr;
}







