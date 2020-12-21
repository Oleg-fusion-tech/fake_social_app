import { useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


function getRedirectUrl(user, path) {
  let url = '/example-start';
  if (!user) {
    return {
      url,
      shouldRedirect: path !== url
    };
  }

  if (user.name && !user.color) {
    url = '/example-page2/:user_id';
  }
  if (user.name && user.color) {
    url = '/example-page3/:user_id';
  }

  return {
    url: url.replace(':user_id', user?.id),
    shouldRedirect: path !== url
  };
}

function PrivateRoute({ children, ...rest }) {
  const userStore = useSelector(state => state.user);

  const {
    shouldRedirect,
    url,
  } = useMemo(() => {
    return getRedirectUrl(userStore.user, rest.path);
  }, [userStore.user, rest.path])

  return (
    <Route
      {...rest}
      render={({ location }) =>
      !shouldRedirect ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: url,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;