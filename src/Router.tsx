import { Footer } from "@ui/components/Footer";
import { Loader2 } from "lucide-react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from "@app/lib/route";
import { HeaderMenu } from "@ui/components/HeaderMenu";

const Home = lazy(() => import('@ui/pages/Home'));
const Events = lazy(() => import('@ui/pages/Events'));

// TODO: Handle errors

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HeaderMenu />,
    errorElement: <h1> Error </h1>,
    children: [
      {
        path: routes.home,
        element: <Home />
      },
      {
        path: routes.events,
        element: <Events />
      }
    ]
  }
])

export function Router() {
  return (
    <main className="min-h-screen min-w-full bg-primary">
      <Suspense fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Loader2 className="animate-spin" />
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
      <Footer />
    </main>
  )
}
