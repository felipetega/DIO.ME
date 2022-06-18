let totalTeams = 14 //gets().split("\n")
let currentTeams = totalTeams //n
let totalMatches = 0

  while(currentTeams>1){
    if(currentTeams%2==0){
      totalMatches+=currentTeams/2
      currentTeams/=2
    }else if(currentTeams%2==1){
      totalMatches+=(currentTeams-1)/2
      currentTeams+=1
      currentTeams/=2
    } 
  }
console.log(totalMatches)
