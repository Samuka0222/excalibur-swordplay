import { Footer } from "@ui/components/Footer";
import { Loader2 as LoaderIcon } from "lucide-react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from "@app/routes/route";
import { HeaderMenu } from "@ui/components/HeaderMenu";
import { Error } from "@ui/pages/Error";

const Home = lazy(() => import('@ui/pages/Home'));
const Events = lazy(() => import('@ui/pages/Events'));
const About = lazy(() => import('@ui/pages/About'));

const Loader = () => {
  return (
    <div className="min-h-screen min-w-full bg-white flex justify-center items-center">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HeaderMenu />,
    errorElement: <Error />,
    children: [
      {
        path: routes.home,
        element: <Home />
      },
      {
        path: routes.events,
        element: <Events />
      },
      {
        path: routes.about,
        element: <About />
      }
    ]
  }
])

export function Router() {
  return (
    <main className="min-h-screen min-w-full bg-primary overflow-y-auto">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <Footer />
    </main>
  )
}
