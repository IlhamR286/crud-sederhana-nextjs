import pool from '@/app/lib/db';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const { id } = params;
    const body = await req.json();
    const { name, description } = body;
    const result = await pool.query(
      'UPDATE items SET name=$1, description=$2 WHERE id=$3 RETURNING *',
      [name, description, id]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const { id } = params;
    await pool.query('DELETE FROM items WHERE id=$1', [id]);
    return NextResponse.json({ success: true }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
