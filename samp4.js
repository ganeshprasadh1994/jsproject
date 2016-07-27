var fs = require('fs');
var fn=["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
var obj={};
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
        obj[cl[ag]]=parseInt(cl[lp]);
      else {
        obj[cl[ag]]+=parseInt(cl[lp]);
      }
    }
  }
 }
 console.log(obj);
 var b1=JSON.stringify(obj);
 fs.appendFile('out.json', b1,'utf8', function (err){
  if (err) throw err;
 });
