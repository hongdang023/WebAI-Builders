import { NextResponse } from 'next/server';
import competencyData from '@/data/competency.json';

/**
 * @api {get} /api/competency Get Competency Framework
 * @apiName GetCompetency
 * @apiGroup Project
 * @apiDescription Lấy thông tin về khung năng lực 11 tiêu chí của Web AI Builders.
 * 
 * @apiSuccess {Array} competencies Danh sách các tiêu chí năng lực.
 */
export async function GET() {
  return NextResponse.json(competencyData, {
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
