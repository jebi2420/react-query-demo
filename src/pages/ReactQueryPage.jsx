import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {

  const fetchPost=()=>{
    return axios.get('http://localhost:3004/posts')
  }

  const {isLoading, data, isError, error} = useQuery({
    queryKey:['posts'],
    queryFn: fetchPost,
    retry: 1,
    select:(data)=>{
      return data.data;
    },
    // staleTime: 60000, // 1분간 api 호출 금지
    // gcTime: 5000, // 5초만 캐시가 유지 // stale < gcTime
    // //refetchInterval: 3000, // 3초마다 실시간으로 계속 호출
    // refetchOnMount: true, // 컴포넌트 들어왔을 때 fetch 할건지, 기본값 true
    // refetchOnWindowFocus: true, // 윈도우 focus 시 자동 fetch
    
  })

  console.log("data: " +  isLoading + " " +  JSON.stringify(data, null, "\t")); 
  console.log("error: " + isError + " " + error)

  // 로딩 시에
  if(isLoading){
    return <h1>Loading...</h1> // 로딩 스피너 보여주거나 하면 됨
  }
  // 에러가 났을 때
  if(isError){
    return <h1>error!{error.messageg}</h1>
  }
  // 로딩, 에러 둘다 안났을 떄 data를 보여준다
  return (
    <div>
      ReactQueryPage
      {data.map((item)=>(
        <div>{item.title}</div> // data의 data에서 title만 뽑아서 보여준다
      ))}
    </div>
  )
}

export default ReactQueryPage
