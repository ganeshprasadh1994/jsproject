var fs = require('fs');
var fn=["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
var obj={};
var mat=[];
for(var i=0;i<fn.length;i++)
{
  var f=fs.readFileSync(fn[i],"utf8");
  var l=f.split("\n");
  var li=l[0].split(",");
  var ag=li.indexOf("Age-group"),
      tru=li.indexOf("Total/ Rural/ Urban"),
      lp=li.indexOf("Literate - Persons");
  for(var j=1;j<l.length;j++)
  {
    var cl=l[j].split(",");
    if(cl[ag]!="0-6" && cl[ag]!="All ages" && cl[tru]==="Total")
    {
      if(obj[cl[ag]]===undefined)
      {
         obj[cl[ag]]=parseInt(cl[lp]);

      }
      else {
        obj[cl[ag]]+=parseInt(cl[lp]);
        }
    }
  }
 }
var c=[];var f;
c1=Object.keys(obj);
console.log(c1.length);
for(i=0;i<c1.length;i++)
{
  b={};
  b["age"]=c1[i];
  f=c1[i];
  b["total"]=obj[f];
  c.push(b);
}
console.log(c);
 var b1=JSON.stringify(c);
 fs.appendFile('outg.json', b1,'utf8', function (err){
  if (err) throw err;
 });
