package com.zjmzxfzhl.modules.sys.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.zjmzxfzhl.modules.sys.entity.SysPostUser;

/**
 * 岗位和用户关系Mapper
 *
 * @author 庄金明
 */
public interface SysPostUserMapper extends BaseMapper<SysPostUser> {
    /**
     * 查询岗位和用户关系列表
     *
     * @param page
     * @param entity
     * @return
     */
    public List<SysPostUser> list(IPage<SysPostUser> page, @Param("entity") SysPostUser entity);
}
