import { NextResponse } from 'next/server';
import projectData from '@/data/project.json';

/**
 * @api {get} /api/project Get Project Information
 * @apiName GetProject
 * @apiGroup Project
 * @apiDescription Lấy thông tin tổng quan về dự án Web AI Builders.
 * 
 * @apiSuccess {Object} project Thông tin dự án.
 * @apiSuccess {Array} team Danh sách thành viên team.
 * @apiSuccess {Object} syllabus Thông tin chương trình học.
 */
export async function GET() {
  return NextResponse.json(projectData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
