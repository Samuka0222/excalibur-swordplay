import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const HeaderMenu = lazy(() => import('@ui/components/HeaderMenu'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderMenu />,
    errorElement: <h1> Error </h1>,
    children: [
      {
        path: "/",
        element: <>Oi mãe</>
      }
    ]
  }
])

export function Router() {
  return (
    <main className="min-h-screen min-w-full bg-primary">
      <RouterProvider router={router} />
    </main>
  )
}
