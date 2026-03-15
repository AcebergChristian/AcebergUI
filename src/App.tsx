import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { DocsLayout } from './layouts/DocsLayout'
import { Home } from './pages/Home'
import { ComponentsPage } from './pages/ComponentsPage'
import { ButtonDemo } from './demos/ButtonDemo'
import { InputDemo } from './demos/InputDemo'
import { BadgeDemo } from './demos/BadgeDemo'
import { CardDemo } from './demos/CardDemo'
import { ModalDemo } from './demos/ModalDemo'
import { AlertDemo } from './demos/AlertDemo'
import { TagDemo } from './demos/TagDemo'
import { AvatarDemo } from './demos/AvatarDemo'
import { TabsDemo } from './demos/TabsDemo'
import { TableDemo } from './demos/TableDemo'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<DocsLayout />}>
            <Route index element={<ComponentsPage />} />
            <Route path="button" element={<ButtonDemo />} />
            <Route path="input" element={<InputDemo />} />
            <Route path="badge" element={<BadgeDemo />} />
            <Route path="card" element={<CardDemo />} />
            <Route path="modal" element={<ModalDemo />} />
            <Route path="alert" element={<AlertDemo />} />
            <Route path="tag" element={<TagDemo />} />
            <Route path="avatar" element={<AvatarDemo />} />
            <Route path="tabs" element={<TabsDemo />} />
            <Route path="table" element={<TableDemo />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
