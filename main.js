const employees5 = [
		  { name: 'David Carlson', 
			 age: 30 
		   },
		  { name: 'Johnn Cena', 
			 age: 34 
			},
		  { name: 'Mike Sheridan', 
			 age: 25 
		   },
		  { name: 'Johnn Carte', 
			age: 50 
		   }
		];

		const johnn = employees5.filter(function(emp){
			  return emp.age > 30
			  })
		console.log(johnn);