import { useParams } from "react-router-dom";
import { Country as CountryType } from "../../types/Country";
import { useQuery } from "@apollo/client";
import { getCountry } from "../../queries/getCountry";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export const Country = () => {
  const { countryCode } = useParams();

  const { data, error, loading } = useQuery<{ country: CountryType }>(
    getCountry,
    {
      variables: {
        code: countryCode,
      },
    }
  );

  useEffect(() => {
    const count = 200;
    const defaults1 = {
      origin: { y: 1 },
    };

    function fire(particleRatio: number, opts: unknown) {
      confetti(
        Object.assign({}, defaults1, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults2 = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults2, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults2, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  });

  if (error) {
    return <>{error.message}</>;
  }

  if (loading) {
    return <>Loading ...</>;
  }

  if (!data) {
    return <>No data for now</>;
  }

  const country = data.country;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        minHeight: "100vh",
      }}
    >
      <h1>{country.name}</h1>
      <p>Currency: {country.currency}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};
