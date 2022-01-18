import request from '@/utils/request'

export default {
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj // 用json格式传递,也可用data:[]用数组传输
    })
  },
  //删除医院设置
  deleteHospSet(id) {
   return request ({
    url:`/admin/hosp/hospitalSet/${id}`,
    method: 'delete'
    })
  },
  //批量删除
  batchRemoveHospSet(idList){
    return request ({
      url:'/admin/hosp/hospitalSet/batchRemove',
      method: 'delete',
      data: idList
      })
  },
  //锁定和取消锁定
  lockHospSet(id,status) {
    return request ({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置信息
  saveHospSet(hospitalSet){
    return request ({
          url: `/admin/hosp/hospitalSet/saveHospitalSet`,
          method: 'POST',
          data: hospitalSet
        })
  },
  getHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
      return request ({
        url: `/admin/hosp/hospitalSet/updateHospitalSet`,
        method: 'post',
        data: hospitalSet
      })
    }
}

