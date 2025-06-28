'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Admin', lastLogin: '2023-04-01', status: true },
  { id: 2, name: 'Jane Smith', role: 'Analyst', lastLogin: '2023-03-28', status: true },
  { id: 3, name: 'Bob Johnson', role: 'Observer', lastLogin: '2023-03-25', status: false },
]

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: !user.status } : user
    ))
  }

  const removeUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <Card className="bg-gray-900 border-gray-700 shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
      <CardHeader className="bg-gray-800 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-blue-400">User Management</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm bg-gray-800 border-gray-700 text-white placeholder-gray-400 hover:bg-gray-700 transition-colors duration-300"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Add New User</Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-gray-800 transition-colors duration-300">
                <TableHead className="text-gray-300">User Name</TableHead>
                <TableHead className="text-gray-300">Role</TableHead>
                <TableHead className="text-gray-300">Last Login</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-800 transition-colors duration-300">
                  <TableCell className="text-white">{user.name}</TableCell>
                  <TableCell className="text-white">{user.role}</TableCell>
                  <TableCell className="text-white">{user.lastLogin}</TableCell>
                  <TableCell>
                    <Switch
                      checked={user.status}
                      onCheckedChange={() => toggleUserStatus(user.id)}
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" className="mr-2 hover:bg-gray-700 transition-colors duration-300">Edit</Button>
                    <Button variant="destructive" onClick={() => removeUser(user.id)} className="hover:bg-red-700 transition-colors duration-300">Remove</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

